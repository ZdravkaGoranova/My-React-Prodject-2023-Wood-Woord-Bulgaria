import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// import { AuthContext } from "../../contexts/AuthContext";


const baseUrl = 'http://localhost:3030/jsonstore/woodTypes';

console.log("delelee :):):)")
export default function Delete ()  {
    const { productId } = useParams();
    const navigate = useNavigate();
   // const { user } = useContext(AuthContext);


  const deleteProduct = (productId) => {
        return fetch(`${baseUrl}/products/${productId}`, {
            method: "DELETE",
            headers: {
               
            }
        })
            .then(res => res.json());
    };


    useEffect(() => {
        deleteProduct(productId )
            .then(() => {
                navigate("/catalog", { replace: true });
            })
    }, [productId,  navigate]);
}

