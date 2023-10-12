import { ProductsContainer, ProductStyles } from './Products.styles';
import { StyledCard } from '../../molecules/Card/Card.styles';
// import Heading from '../../atoms/Heading';
// import Image from '../../atoms/Image/index'
// import Paragraph from '../../atoms/Paragraph';
// import Button from '../../atoms/Button/index'
import styled from 'styled-components';
import Modal from '../../molecules/Modal/index'
import { useState } from 'react';

const CardBody = styled.div`
    margin: 10px;
`

function Products() {
    const [isVisible, setIsVisible] = useState(false)
    const productsData =
        [
            {
                sideEffects: 'some',
                image: "https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=1600",
                name: "test",
                information: "there is test discription",
                size: "test",
                price: 100,
            },
            {
                sideEffects: 'some',
                image: "https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=1600",
                name: "test",
                information: "there is test discription",
                size: "test",
                price: 100,
            },
            {
                sideEffects: 'some',
                image: "https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=1600",
                name: "test",
                information: "there is test discription",
                size: "test",
                price: 100,
            },
            {
                sideEffects: 'some',
                image: "https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=1600",
                name: "test",
                information: "there is test discription",
                size: "test",
                price: 100,
            },
            {
                sideEffects: 'some',
                image: "https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=1600",
                name: "test",
                information: "there is test discription",
                size: "test",
                price: 100,
            },
            {
                sideEffects: 'some',
                image: "https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=1600",
                name: "test",
                information: "there is test discription",
                size: "test",
                price: 100,
            },
            {
                sideEffects: 'some',
                image: "https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=1600",
                name: "test",
                information: "there is test discription",
                size: "test",
                price: 100,
            },
            {
                sideEffects: 'some',
                image: "https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=1600",
                name: "test",
                information: "there is test discription",
                size: "test",
                price: 100,
            }, {
                sideEffects: 'some',
                image: "https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=1600",
                name: "test",
                information: "there is test discription",
                size: "test",
                price: 100,
            }, {
                sideEffects: 'some',
                image: "https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=1600",
                name: "test",
                information: "there is test discription",
                size: "test",
                price: 100,
            }, {
                sideEffects: 'some',
                image: "https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=1600",
                name: "test",
                information: "there is test discription",
                size: "test",
                price: 100,
            }, {
                sideEffects: 'some',
                image: "https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=1600",
                name: "test",
                information: "there is test discription",
                size: "test",
                price: 100,
            }, {
                sideEffects: 'some',
                image: "https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=1600",
                name: "test",
                information: "there is test discription",
                size: "test",
                price: 100,
            }, {
                sideEffects: 'some',
                image: "https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=1600",
                name: "test",
                information: "there is test discription",
                size: "test",
                price: 100,
            },
        ];

    // const ProductDetail = () => {
    //     console.log('function called')
    // }

    return (
        <>
            <ProductStyles>
                {/* <Heading level={1} children='Products' center /> */}
                <ProductsContainer>
                    {productsData?.map(ele =>
                        <StyledCard width={300}>
                            {/* <Image imageUrl={ele?.image} roundCustom={{ top: 10, left: 0, bottom: 0, right: 10 }} /> */}
                            <CardBody>
                                {/* <Paragraph level={4} children={`Name: ${ele?.name}`} /> */}
                                {/* <Paragraph children={`Description: ${ele?.information}`} /> */}
                                {/* <Paragraph children={`Size: ${ele?.size}`} /> */}
                                {/* <Paragraph children={`Price: ${ele?.price}`} /> */}
                                {/* <Paragraph children={`Side Effects: ${ele?.sideEffects}`} /> */}
                                {/* <Button onClick={ProductDetail}>Detail</Button> */}
                            </CardBody>
                        </StyledCard>
                    )}
                </ProductsContainer>
            </ProductStyles>

            <>
                <Modal isOpen={isVisible} setIsOpen={setIsVisible}>
                    <p>there is text</p>
                </Modal>
            </>
        </>
    )
}

export default Products;