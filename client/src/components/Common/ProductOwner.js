import { useContext } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.js";
import { useProductsContext } from "../../contexts/WoodContext.js";


export default function ProductOwner({ children }) {

    const { userId } = useContext(AuthContext)
    const { productId } = useParams();
    // const { getProduct } = useProductsContext()
  

    const { products } = useProductsContext()
    console.log(products);



        const game = products.find(p=>p._id===productId)
        console.log(game)
  

    const currenetProduct = game;


    if (currenetProduct && currenetProduct._ownerId !== userId) {
        return <Navigate to={`/details/${productId}`} />
    }
    return children ? children : <Outlet />
}
