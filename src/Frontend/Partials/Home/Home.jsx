import Title from "../../../Components/Title"
import Tag from "./Tag"
import Posts from "./Posts"

const Home = () => {
    return (
        <div>
            <Title title={'Airbnb'} />
            {/* Tag section start */}
            <Tag></Tag>
            {/* Tag section end */}

            <div className="container mx-auto">
                <Posts />
            </div>

        </div>
    )
}

export default Home
