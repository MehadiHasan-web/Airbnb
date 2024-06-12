import Title from "../../../Components/Title"
import Posts from "./Posts"

const Home = () => {
    return (
        <div>
            <Title title={'Airbnb'} />

            <div className="container mx-auto">
                <Posts />
            </div>

        </div>
    )
}

export default Home
