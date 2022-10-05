import { useSelector } from "react-redux";

export const Dashboard = () =>{

    const { id } = useSelector((state) => state.login);
    return(
        <div style={{backgroundColor:"#abcdef",height:'100vh'}}>
            <span style={{float:'right',margin:20}}>Logged as, <b>{id}</b></span>
        </div>
    )
}