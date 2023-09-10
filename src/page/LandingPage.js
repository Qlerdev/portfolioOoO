import profile from "../page/assets/icons/man (1).png";
import { useNavigate } from "react-router-dom";
function LandingPage () {
    const navigate = useNavigate();
    const handleToDetail = () =>{
        navigate("/details");
    };
    return(
        <div className="text-center font-mono">
            <p className="font-mono text-3xl font-bold uppercase py-3">About Me</p>
            <div className="flex justify-center">
                <img 
                src={profile}
                alt="profile"
                className="w-[20%] my-3 bg-black rounded-full p-7"
                />
            </div>
            <p className="text-md mt-3 font-bold blue mx-40">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.                
                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. 
                It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. 
                The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </p>{" "}
            <button className="text-xl text-[#27005D] underline" onClick={() =>handleToDetail()}>NEXT</button>
        </div>
    );
}

export default LandingPage;