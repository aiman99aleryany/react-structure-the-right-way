import './HomePageContainer.scss';
import translation from 'utils/translation/translation';

function HomePageContainer() {
    return (
        <section className="homePageContainer">
            <h1>{translation.title}</h1>
            <h2>{translation.subTitle}</h2>
        </section>
    );
}

export default HomePageContainer;
