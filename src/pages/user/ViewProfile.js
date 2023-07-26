import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import { UserIcon } from "../../assets/icons";

export default function ViewProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user);
  const [profileFormData, setprofileFormData] = useState([]);
  let userData;
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
    console.log(profileFormData);
    navigate(`/welcome`);
  };

  return (
    <div>
      {!loading && profileFormData.hasOwnProperty(0) == true ? (
        <div className="w-full text-gray-lighter">
          <div className="flex ">
            <div className="mx-auto">
              <div className="">
                <UserIcon />
              </div>
              <h3 className="text-center mt-3">
                Hello {user[0].profile.full_name}
              </h3>
            </div>
          </div>
          <div className="">
            <div className="text-gray-lighter w-full bg-gray-dark p-5 rounded-xl mx-auto">
              <form onSubmit={handleSubmit} className=" ">
                <div className="grid grid-cols-2 gap-2">
                  <div className="mb-2">
                    <label
                      className="block text-sm tracking-wide mb-1 text-pink-dark"
                      htmlFor="full_name"
                    >
                      Email
                    </label>
                    <p>{profileFormData[0].email}</p>
                  </div>
                  <div>
                    <label
                      className="block text-sm tracking-wide mb-1 text-pink-dark"
                      htmlFor="gender"
                    >
                      Gender
                    </label>
                    <p>{profileFormData[0].profile.gender}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="mb-2">
                    <label
                      className="text-pink-dark block text-sm tracking-wide mb-1"
                      htmlFor="occupation"
                    >
                      Occupation
                    </label>
                    <p>{profileFormData[0].profile.occupation}</p>
                  </div>
                  <div className="mb-2">
                    <label
                      className="text-pink-dark block text-sm tracking-wide mb-1"
                      htmlFor="age"
                    >
                      Age
                    </label>
                    <p>{profileFormData[0].profile.age}</p>
                  </div>
                </div>
                <div className="text-center flex  items-center">
                  <div className="mx-auto">
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
