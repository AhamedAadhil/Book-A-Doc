import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets/assets_frontend/assets";

const Appoinment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState({});

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  return (
    docInfo && (
      <div>
        {/* doctor details */}
        <div>
          <div>
            <img src={docInfo.image} alt="doctor image" />
          </div>
          <div>
            {/* doc info: name,degree,exp */}
            <p>
              {docInfo.name} <img src={assets.verified_icon} alt="verified" />
            </p>
            <div>
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button>{docInfo.experience}</button>
            </div>
            {/*doctor about  */}
            <div>
              <p>
                About <img src={assets.info_icon} alt="info icon" />
              </p>
              <p>{docInfo.about}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Appoinment;
