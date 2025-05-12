import { useState } from "react";
import { SurveyAnswers } from "../dashboard.types";
import { useNavigate } from "react-router-dom";
import { sendSurveyResponses } from "../dashboard.api";

export default function SurveyPage() {

    const navigate = useNavigate();

    const questions = [
        "1. What is your name?",
        "2. How did you hear about us?",
        "3. What school do you go to?",
        "4. Have you used any services to help with university applications?",
        "5. How are you getting ready to apply to university?",
        "6. How can we help you? (select all that apply)",
    ]

    const [answers, setAnswers] = useState<SurveyAnswers>({
        name: '',
        heardFrom: '',
        heardFromOther: '',
        school: '',
        usedService: null,
        usedServiceDetails: '',
        readiness: '',
        helpWith: [],
    });

    const handleChange = (
        field: keyof SurveyAnswers,
        value: string | string[] | null
    ) => {
        setAnswers(a => ({ ...a, [field]: value }));
    };

    const toggleHelpWith = (option: string) => {
        setAnswers(a => {
            const arr = a.helpWith.includes(option)
                ? a.helpWith.filter(o => o !== option)
                : [...a.helpWith, option];
            return { ...a, helpWith: arr };
        });
    };

    const handleSkip = (field: 'school' | 'usedService') =>
        handleChange(field, null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const sendingData = {
            responses: [
                {
                    question_index: 0,
                    answer_text: answers.name,
                    answer_choices: [],
                },
                {
                    question_index: 1,
                    answer_text: answers.heardFromOther !== null || '' ? answers.heardFromOther : answers.heardFrom,
                    answer_choices: [],
                },
                {
                    question_index: 2,
                    answer_text: answers.school,
                    answer_choices: [],
                },
                {
                    question_index: 3,
                    answer_text: answers.usedServiceDetails !== null || '' ? answers.usedServiceDetails : answers.usedService,
                    answer_choices: [],
                },
                {
                    question_index: 4,
                    answer_text: answers.readiness,
                    answer_choices: [],
                },
                {
                    question_index: 5,
                    answer_text: null,
                    answer_choices: answers.helpWith,
                }
            ]
        }
        console.log(JSON.stringify(sendingData));
        const data = await sendSurveyResponses(sendingData);
        if (data.status === 401) {
            console.error(data)
            navigate("/login");
        } else if (data.status === 400) {
            console.error(data);
            throw new Error("Bad request. Failed with status "+data.status);
        } else if (data.status === 404) {
            console.error(data);
            throw new Error("Not found. Failed with status "+data.status);
        }
        navigate("/app");
    };

    return (
        <>
            <div className="container my-5">
                <h1 className="mb-4">Quick Survey</h1>
                <form onSubmit={handleSubmit}>
                    {/* Q0 */}
                    <div className="mb-3">
                        <label className="form-label">{questions[0]}</label>
                        <input
                            type="text"
                            className="form-control"
                            value={answers.name}
                            onChange={e => handleChange('name', e.target.value)}
                        />
                    </div>

                    {/* Q1 */}
                    <div className="mb-3">
                        <label className="form-label">{questions[1]}</label>
                        {[
                            'Instagram','TikTok','Youtube','Facebook',
                            'A friend told me','From my school/teacher',
                            'Google Search','Yandex Search','My parents told me','Other'
                        ].map(opt => (
                            <div className="form-check" key={opt}>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id={`heard-${opt}`}
                                    name="heardFrom"
                                    value={opt}
                                    checked={answers.heardFrom === opt}
                                    onChange={e => handleChange('heardFrom', e.target.value)}
                                />
                                <label className="form-check-label" htmlFor={`heard-${opt}`}>
                                    {opt}
                                </label>
                            </div>
                        ))}
                        {answers.heardFrom === 'Other' && (
                            <input
                                type="text"
                                className="form-control mt-2"
                                placeholder="Please specify"
                                value={answers.heardFromOther}
                                onChange={e => handleChange('heardFromOther', e.target.value)}
                            />
                        )}
                    </div>

                    {/* Q2 */}
                    <div className="mb-3 d-flex align-items-center">
                        <div className="flex-grow-1">
                            <label className="form-label">
                                {questions[2]}
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                disabled={answers.school === null}
                                value={answers.school ?? ''}
                                onChange={e => handleChange('school', e.target.value)}
                            />
                        </div>
                        <button
                            type="button"
                            className="btn btn-link ms-3"
                            onClick={() => handleSkip('school')}
                        >
                            Skip
                        </button>
                    </div>

                    {/* Q3 */}
                    <div className="mb-3">
                        <label className="form-label">
                            {questions[3]}
                        </label>
                        {[
                            { value: 'agency', label: 'Yes, an educational agency' },
                            { value: 'tools', label: 'Yes, some online tools' },
                            { value: 'none', label: 'No, Achievka is my first support service' },
                        ].map(opt => (
                            <div className="form-check" key={opt.value}>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id={`used-${opt.value}`}
                                    name="usedService"
                                    value={opt.value}
                                    checked={answers.usedService === opt.value}
                                    onChange={e =>
                                    handleChange('usedService', e.target.value)
                                    }
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor={`used-${opt.value}`}
                                >
                                    {opt.label}
                                </label>
                            </div>
                        ))}
                        {answers.usedService !== null && answers.usedService !== 'none' && (
                            <div className="mt-2 d-flex align-items-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="If so, which ones?"
                                    value={answers.usedServiceDetails}
                                    onChange={e =>
                                    handleChange('usedServiceDetails', e.target.value)
                                    }
                                />
                                <button
                                    type="button"
                                    className="btn btn-link ms-3"
                                    onClick={() => handleSkip('usedService')}
                                >
                                    Skip
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Q4 */}
                    <div className="mb-3">
                        <label className="form-label">
                            {questions[4]}
                        </label>
                        {[
                            'Just looking around',
                            'Thinking about what to study',
                            'Starting my application',
                            'Already applied',
                        ].map(opt => (
                            <div className="form-check" key={opt}>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id={`ready-${opt}`}
                                    name="readiness"
                                    value={opt}
                                    checked={answers.readiness === opt}
                                    onChange={e => handleChange('readiness', e.target.value)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor={`ready-${opt}`}
                                >
                                    {opt}
                                </label>
                            </div>
                        ))}
                    </div>

                    {/* Q5 */}
                    <div className="mb-4">
                        <label className="form-label">
                            {questions[5]}
                        </label>
                        {[
                            'Picking the right university',
                            'Writing my motivation letter or essay',
                            'Understanding the application steps',
                            'Just want to get familiar with platform',
                        ].map(opt => (
                            <div className="form-check" key={opt}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={`help-${opt}`}
                                    checked={answers.helpWith.includes(opt)}
                                    onChange={() => toggleHelpWith(opt)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor={`help-${opt}`}
                                >
                                    {opt}
                                </label>
                            </div>
                        ))}
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit Survey
                    </button>
                </form>
            </div>
        </>
    );
};
  