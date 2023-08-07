import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import {
  FingerPrintIcon,
  EmailIcon,
  GenderIcon,
  WorkIcon,
  AgeIcon,
} from "../../assets/iconsandsvgs";
import { closeViewProfileTab } from "../../features/modal/ModalSlice";

export default function ViewProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user);
  const [profileFormData, setprofileFormData] = useState([]);

  useEffect(() => {
    if (!loading && user[0] !== undefined) {
      setprofileFormData(user);
    }
  }, [user]);

  const handleInputs = (event) => {
    setprofileFormData({
      ...profileFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/welcome`);
  };

  return (
    <div>
      {!loading && profileFormData.hasOwnProperty(0) == true ? (
        <div className="w-2/3 mx-auto text-gray-lighter bg-gray-dark rounded-lg">
          <div className="flex ">
            <div className="mx-auto">
              <div className="">
                <FingerPrintIcon />
              </div>
              <h3 className="text-center mt-3">
                Hello {user[0].profile.full_name}
              </h3>
            </div>
          </div>
          <div className="">
            <div className="text-gray-lighter w-full bg-gray-dark p-5 rounded-xl mx-auto">
              <form onSubmit={handleSubmit} className=" ">
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div className="mb-2">
                    <div className="flex">
                      <EmailIcon />
                      <label
                        className="block text-sm tracking-wide mb-1 text-pink-dark ms-3"
                        htmlFor="full_name"
                      >
                        Email
                      </label>
                    </div>
                    <p className="ps-8">{profileFormData[0].email}</p>
                  </div>
                  <div>
                    <div className="flex">
                      <GenderIcon />
                      <label
                        className="block text-sm tracking-wide mb-1 text-pink-dark ms-3"
                        htmlFor="gender"
                      >
                        Gender
                      </label>
                    </div>
                    <p className="ps-8">{profileFormData[0].profile.gender}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="mb-2">
                    <div className="flex">
                      <WorkIcon />
                      <label
                        className="text-pink-dark block text-sm tracking-wide mb-1 ms-3"
                        htmlFor="occupation"
                      >
                        Occupation
                      </label>
                    </div>
                    <p className="ps-8">
                      {profileFormData[0].profile.occupation}
                    </p>
                  </div>
                  <div className="mb-2">
                    <div className="flex">
                      <AgeIcon />
                      <label
                        className="text-pink-dark block text-sm tracking-wide mb-1 ms-3"
                        htmlFor="age"
                      >
                        Age
                      </label>
                    </div>
                    <p className="ps-8">{profileFormData[0].profile.age}</p>
                  </div>
                </div>
                <div className="text-center flex  items-center">
                  <div
                    className="mx-auto"
                    onClick={() => dispatch(closeViewProfileTab())}
                  >
                    <Button text={"Close"} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <h4 className="text-white">Profile is loading...</h4>
      )}
    </div>
  );
}
