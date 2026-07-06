import TodoFilter from "../../components/TodoFilter/TodoFilter";
import TodoFooter from "../../components/TodoFooter/TodoFooter";
import TodoForm from "../../components/TodoForm/TodoForm";
import TodoList from "../../components/TodoList/TodoList";

const Home = () => {

    return(
        <div className="min-h-screen  flex justify-center items-center bg-gradient-to-br from-cyan-200 to-pink-200">
            <div className="bg-white rounded-3xl p-8 w-[450px]">

                <h1 className="text-4xl font-bold text-center mb-6">
                   Todo List
                </h1>
                <TodoFilter></TodoFilter>
                <TodoForm />

                <TodoList />

                <TodoFooter />

            </div>
        </div>
    );
  
    
}
export default Home