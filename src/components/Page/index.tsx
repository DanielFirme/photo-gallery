import { Helmet } from "react-helmet";
import image from '../../assets/d32776.png';

const Page = () => {
    return (
        <Helmet>
            <meta property="og:title" content="Galeria de Fotos" />
            <meta property="og:description" content="Fotos vindas de uma api de testes" />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="512" />
            <meta property="og:image:height" content="512" />
        </Helmet>
    )
}

export default Page;