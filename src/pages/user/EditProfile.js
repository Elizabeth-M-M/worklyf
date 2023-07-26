import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import { UserIcon } from "../../assets/icons";

export default function EditProfile() {
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
            </div>
          </div>
          <div className="">
            <div className="text-gray-lighter w-full bg-gray-dark p-5 rounded-xl mx-auto">
              <form onSubmit={handleSubmit} className=" ">
                <div className="mb-2">
                  <label
                    className="block text-sm tracking-wide mb-1 text-pink-dark"
                    htmlFor="full_name"
                  >
                    Full Name
                  </label>
                  <input
                    className="w-full bg-gray-light appearance-none rounded p-2  outline-none text-white"
                    type="text"
                    id="full_name"
                    name="full_name"
                    value={profileFormData[0].profile.full_name}
                    onChange={handleInputs}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label
                      className="block text-sm tracking-wide mb-1 text-pink-dark"
                      htmlFor="gender"
                    >
                      Gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      className="w-full bg-gray-light appearance-none rounded p-2  text-white"
                      value={profileFormData.gender}
                      onChange={handleInputs}
                      required
                    >
                      <option value="">Choose...</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <label
                      className="block text-sm tracking-wide mb-1 text-pink-dark"
                      htmlFor="age"
                    >
                      Age
                    </label>
                    <input
                      className="w-full bg-gray-light appearance-none rounded p-2  outline-none text-white"
                      type="text"
                      id="age"
                      name="age"
                      value={profileFormData[0].profile.age}
                      onChange={handleInputs}
                      required
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label
                    className="text-pink-dark block text-sm tracking-wide mb-1"
                    htmlFor="occupation"
                  >
                    Occupation
                  </label>
                  <input
                    className="w-full bg-gray-light appearance-none rounded p-2  text-white"
                    id="occupation"
                    name="occupation"
                    value={profileFormData[0].profile.occupation}
                    onChange={handleInputs}
                    required
                  />
                </div>

                <div className="text-center flex justify-between">
                  <Button text={"Edit"} type={"submit"} />
                  <div>
                    <Button text={"Close"} clicked={`/welcome`} />
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
