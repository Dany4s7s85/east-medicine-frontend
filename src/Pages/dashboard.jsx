import styled from 'styled-components'
import Carousel from '../Components/molecules/Crousel/index'
import ProductsContainer from '../Components/organisms/Products/Prducts'

const DashboardStyles = styled.div`
    background-color: #bebebe;
`


const Dashboard = () => {
    const carouselData = [
        {
            imageUrl: 'https://cdn.pixabay.com/photo/2014/02/03/16/52/chain-257490__340.jpg',
            heading: 'heading1',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        },
        {
            imageUrl: 'https://cdn.pixabay.com/photo/2013/07/25/11/52/rajiv-gandhi-sea-link-166867__340.jpg',
            heading: 'heading2',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        },
        {
            imageUrl: 'https://cdn.pixabay.com/photo/2016/07/29/14/34/ballet-1553361__340.jpg',
            heading: 'heading3',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        },
    ]
    return (
        <DashboardStyles>
            <Carousel carouselData={carouselData} />
            <ProductsContainer />
        </DashboardStyles>
    )
}

export default Dashboard;