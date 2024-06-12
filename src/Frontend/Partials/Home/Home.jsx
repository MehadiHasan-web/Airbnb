import Title from "../../../Components/Title"
import Tag from "./Tag"

const Home = () => {
    return (
        <div>
            <Title title={'Airbnb'} />
            {/* Tag section start */}
            <Tag></Tag>
            {/* Tag section end */}

            <div className="container mx-auto">
                <div className="grid grid-cols-5 gap-2">
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                </div>

            </div>

        </div>
    )
}

export default Home
