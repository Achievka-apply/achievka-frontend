import { useAppSelector } from "../../../../store/hooks";

export default function General() {
    const user = useAppSelector(state => state.user.userProfile);

    return (
        <>
            <h1>Hi, {user ? user.first_name : 'there'}! Ready to take the next step toward your future?</h1>

            Здесь отображаются все ваши последние действия и шаги. Удобно вернуться к важному — всё под рукой.
        
            Все инструменты по гриду

            График сколько осталось запросов на каждый инструмент 

        </>
    );
};
  