/*import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Share = () => {

    const { currentUser } = useContext(AuthContext);

    const [file, setFile] = useState(null);
    const [desc, setDesc] = useState("");
  
    const upload = async () => {
      try {
        const formatData = new formatData();
        formatData.append("file", file);
        const res = await makeRequest.post("/upload", formatData);
        return res.data;
      } catch (err) {
        console.log(err);
      }
    };
  
    const queryClient = useQueryClient();
  
    const mutation = useMutation(
      (newPost) => {
        return makeRequest.post("/socialPosts", newPost);
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["socialPosts"]);
        },
      }
    );
  
    const handleClick = async (e) => {
      e.preventDefault();
      let imgUrl = "";
      if (file) imgUrl = await upload();
      mutation.mutate({ desc, img: imgUrl });
      setDesc("");
      setFile(null);
    };


    return (
        <div className="share">
            <div className="container">
                <div className="top">
                    <img
                        src={currentUser.profilePic}
                        alt=""
                    />
                    <input type="text" placeholder={`¿Qué te apetece compartir ${currentUser.name}?`} />
                </div>
                <hr />
                <div className="bottom">
                    <div className="left">
                        <input type="file" id="file" style={{ display: "none" }} />
                        <label htmlFor="file">
                            <div className="item">
                                <AddPhotoAlternateOutlinedIcon />
                                <span>Añade una Imagen</span>
                            </div>
                        </label>
                        <div className="item">
                            <AddLocationAltOutlinedIcon />
                            <span>Añade un Lugar</span>
                        </div>
                        <div className="item">
                            <PeopleAltOutlinedIcon />
                            <span>Haz una Mención</span>
                        </div>
                    </div>
                    <div className="right">
                        <button onClick={handleClick}>Compartir</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Share;*/