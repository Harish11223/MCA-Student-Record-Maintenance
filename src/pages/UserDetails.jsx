import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { firestore } from "../Firebase";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

function UserDetails() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userDocRef = doc(firestore, "users", userId);
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
          setUser(userDocSnapshot.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching user details: ", error);
      }
    };

    fetchUserDetails();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Header />
    <ul className="nav nav-tabs ">
      <li className="d-flex registration align-items-center">
        <h4 className="m-0">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Student Details&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </h4>
      </li>
    </ul>

    <section style={{ backgroundColor: '#eee' }}>
      {user && (
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-3">
              <div className="card mb-4">
                <div className="card-body text-center">
                  {user && user.imageUrl && (
                    <img
                      src={user.imageUrl}
                      className="rounded img-fluid w-50"
                      alt="User"
                    />
                  )}
                  <h5 className="my-3">{user ? (
                    <p className="mb-0">{user.firstName} {user.middleName} {user.lastName}</p>
                  ) : (
                    <p>Loading user data...</p>
                  )}</h5>
                  <p className="text-muted mb-1">Roll No: {user.roll}</p>
                  <p className="text-muted mb-1">Skills: {user.skills}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="card mb-4 ml-3">
                <div className="card-body mx-3">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0"></p>
                    </div>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{user.firstName} {user.middleName} {user.lastName}</p>
                  </div>

                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Roll No</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.roll}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.phoneNumber}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Skills</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.skills}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Internships</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.internships}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Achievements</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.achievements}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Post Graduation</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.postGradCollege}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">CGPA</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.semesterResult}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Hobbies</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.hobbies}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Extra Curricular</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.extraCurricular}</p>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section >
    <Footer />
  </>
  );
}

export default UserDetails;
