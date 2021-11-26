import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import WallBedContext from "./WallBedContext";
import "bootstrap/dist/css/bootstrap.min.css";

export default function WallBedDetails() {
    //   const [data, setData] = useState([]);
    // let pageParams = useParams();
    // console.log(pageParams)
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const context = useContext(WallBedContext);

    useEffect(() => {
        const getData = async () => {
            let wantedProduct = await context.getProductByID(productId);
            console.log(wantedProduct)
            setProduct(wantedProduct);
        }
        getData()
    }, [productId])



    return <React.Fragment>
        {product ?
            <React.Fragment>
                <div class="row">
                    <div class="col-12 col-lg-6 d-flex align-items-center justify-content-center"

                        style={{
                            backgroundImage: `url("${product.image_url}")`,
                            "backgroundRepeat": "no-repeat", "backgroundSize": "contain ", "backgroundPosition": "center"
                        }}>
                        <p class="indi-img-container" >
                        </p>
                    </div>
                    <div class="col-12 col-lg-6">
                        <h1 class="mb-4 indi-title">{product.name}</h1>
                        <p class="indi-flavour">Stock:{product.stock}</p>
                        <p>
                            {product.description}
                        </p>
                        <p class="indi-spacing"></p>
                        {/* <p class="indi-ingredient">
                            Colours: {product.woodColour.name}
                        </p> */}
                        <p class="indi-spacing"></p>
                        <div class="row indi-table-container">
                            <div class="col-12 col-xl-6 col-md-6">
                                <h4 class="indi-table-details">Key Features:</h4>
                                <div class="pr-5 pr-lg-0">
                                    <table class="table">
                                        <tbody>
                                            <tr class="indi-table-details">
                                                <td>
                                                    <i class="fas fa-tint mr-2"></i> BED SIZE
                                                </td>
                                                <td>{product?.bedSize?.name}</td>
                                            </tr>
                                            <tr class="indi-table-details">
                                                <td>
                                                    <i class="fas fa-hourglass-half mr-2"></i> MATRESS TYPE
                                                </td>
                                                <td>{product?.mattressType?.name}</td>
                                            </tr>
                                            <tr class="indi-table-details">
                                                <td>
                                                    <i class="fas fa-mug-hot mr-2"></i>BED ORIENTATION
                                                </td>
                                                <td>{product?.bedOrientation?.name}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="col-12 col-xl-6 col-md-6">
                                <h4>Specifications</h4>
                                <div class="pr-5 pr-lg-0">
                                    <table class="table">
                                        <tbody>
                                            <tr class="indi-table-details">
                                                <td>FRAME COLOUR</td>
                                                <td>{product?.frameColour?.name}</td>
                                            </tr>
                                            <tr class="indi-table-details">
                                                <td>WEIGHT</td>
                                                <td>{product.weight} kg</td>
                                            </tr>
                                            {/* <tr class="indi-table-details">
                                                <td>ORIGIN</td>
                                                <td>Art of tea blend</td>
                                            </tr> */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <p class="indi-spacing"></p>
                        <button class="indi-add-to-cart mb-3">Add To Cart - ${product.cost}</button>
                        <p class="mt-2 warning-text mb-2" style={{ "display": "none" }}>
                            Item has been added to your cart
                        </p>
                        {/* <p class="mt-2 warning-text mb-2 " style="display: none;">
                            Please login before adding item into cart. Redirecting to login
                            page...
                        </p> */}
                    </div>
                </div>

            </React.Fragment>
            : null}
    </React.Fragment>
        ;
}
