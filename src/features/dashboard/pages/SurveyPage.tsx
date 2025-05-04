import { useState } from "react";
import { SurveyAnswers } from "../dashboard.types";
import { useNavigate } from "react-router-dom";

export default function SurveyPage() {

    const navigate = useNavigate();

    const [answers, setAnswers] = useState<SurveyAnswers>({
        name: '',
        heardFrom: '',
        heardFromOther: '',
        school: null,
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('submit payload', answers);
        // fetch('/api/survey', { method:'POST', body: JSON.stringify(answers) })
        navigate("/app");
    };

    return (
        <>
            <div className="container my-5">
                <h1 className="mb-4">Quick Survey</h1>
                <form onSubmit={handleSubmit}>
                    {/* Q0 */}
                    <div className="mb-3">
                        <label className="form-label">0. What is your name?</label>
                        <input
                            type="text"
                            className="form-control"
                            value={answers.name}
                            onChange={e => handleChange('name', e.target.value)}
                        />
                    </div>

                    {/* Q1 */}
                    <div className="mb-3">
                        <label className="form-label">1. How did you hear about us?</label>
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
                                2. What school do you go to?
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
                            3. Have you used any services to help with university applications?
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
                            4. How are you getting ready to apply to university?
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
                            5. How can we help you? (select all that apply)
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
  