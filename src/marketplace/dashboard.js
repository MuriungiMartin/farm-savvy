/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import AddProduceListing from "./listnew";
import { Modal } from "react-bootstrap";
import OrderCard from "./vieworder";

// const userData = {
//   username: "JohnDoe",
//   location: "Farmington, USA",
//   bio: "A passionate farmer.",
//   listings: [
//     {
//       id: 1,
//       name: "Malenge",
//       price: 50,
//       quantity: 10,
//       image: "./images/pumpkin.jpeg",
//       orders: [
//         {
//           id: 1,
//           quantity: 5,
//           date: "2021-08-01",
//         },
//         {
//           id: 2,
//           quantity: 3,
//           date: "2021-08-02",
//         },
//       ],
//     },
//     {
//       id: 2,
//       name: "Pawpaw",
//       price: 75,
//       quantity: 10,
//       image: "./images/pawpaw.webp",
//       orders: [
//         {
//           id: 1,
//           quantity: 5,
//           date: "2021-08-01",
//         },
//         {
//           id: 2,
//           quantity: 3,
//           date: "2021-08-02",
//         },
//       ],
//     },
//     {
//       id: 3,
//       name: "Spinach",
//       price: 75,
//       quantity: 10,
//       image:
//         "data:image/jpeg;base64,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",
//       orders: [
//         {
//           id: 1,
//           quantity: 5,
//           date: "2021-08-01",
//         },
//         {
//           id: 2,
//           quantity: 3,
//           date: "2021-08-02",
//         },
//       ],
//     },
//     //goats
//     {
//       id: 4,
//       name: "Goat",
//       price: 10000,
//       quantity: 10,
//       image:
//         "https://media.istockphoto.com/id/1357867624/photo/two-young-goats-and-one-buck-poses-to-camera.jpg?s=2048x2048&w=is&k=20&c=ivEnWbU1Y3If3wfL2Ut0VJCDG_q7J4mUTRgnpX2zWRI=",
//       orders: [
//         {
//           id: 1,
//           quantity: 5,
//           date: "2021-08-01",
//         },
//         {
//           id: 2,
//           quantity: 3,
//           date: "2021-08-02",
//         },
//       ],
//     },
//   ],
//   messages: [
//     {
//       id: 1,
//       user: "JaneSmith",
//       message: "Hello, I'm interested in your product.",
//     },
//     {
//       id: 2,
//       user: "Bwana Msa",
//       message: "Can you provide more details about your listing?",
//     },
//   ],
//   reviews: [
//     { id: 1, user: "Bwana Maksuudi", rating: 4, comment: "Great seller!" },
//     {
//       id: 2,
//       user: "Fundi Mangungu",
//       rating: 5,
//       comment: "Very satisfied with the product.",
//     },
//     {
//       id: 3,
//       user: "Mtemi bokono",
//       rating: 3,
//       comment: "Fast delivery, but the product quality could be better.",
//     },
//     {
//       id: 4,
//       user: "Mwelusi",
//       rating: 5,
//       comment: "Idili zaidi!!",
//     },
//   ],
// };

const UserDashboard = () => {
  const username = localStorage.getItem("username");
  const userData = {
    username: username,
    location: "Farmington, USA",
    bio: "A passionate farmer.",
  };

  async function getlistings() {
    const lUrl = `https://localhost:7228/api/Listings/list produce?username=${username}`;
    const response = await fetch(lUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    if (res.status === 200) {
      var listings = res.data;
      // Fetch orders for each listing
      const updatedListings = await Promise.all(
        listings.map(async (listing) => {
          const orders = await getorders(listing.id);
          return { ...listing, orders };
        })
      );

      await setUser((prevState) => ({
        ...prevState,
        listings: updatedListings,
      }));
    } else {
      //alert("Error loading listings");
    }
  }

  async function getorders(listId) {
    const lUrl = `https://localhost:7228/api/Orders/list orders listing?id=${listId}`;
    const response = await fetch(lUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    if (res.status === 200) {
      return res.data;
    } else {
      //   alert("Error loading listings");
    }
  }

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    userData,
  });
  const [listings, setListings] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleshowModal = () => {
    setShowModal(true);
  };

  const [showOrder, setShowOrder] = useState(false);
  const handleCloseOrder = () => {
    setShowOrder(false);
  };
  const handleshowOrder = () => {
    setShowOrder(true);
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      // Fetch user data from an API
      await setUser(userData);
      await getlistings();
      setLoading(false);
      //print user data to a file
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-text">Loading...</div>
      </div>
    );
  }
  return (
    //center the contents
    <div className="market-header">
      <div className="container-fluid">
        <div className="row">
          <div class="container-fluid" padding-top="50px">
            <div class="card">
              <div
                class="card-header text-center "
                font-family="Sans-Serif"
                text-transform="uppercase"
                font-size="1.5rem"
              >
                <strong>MY PRODUCE LISTINGS</strong>
                <span style={{ marginLeft: "10px" }}>
                  <Button variant="outline-success" className="float-right">
                    {`Total Listings: ${user?.listings?.length}`}
                  </Button>
                </span>
                <span style={{ marginLeft: "10px" }}>
                  <Button
                    variant="outline-success"
                    className="float-right"
                    onClick={handleshowModal}
                  >
                    ➕ Listing
                  </Button>
                </span>
              </div>
              <div>
                <Modal show={showModal} onHide={handleCloseModal} centered>
                  <Modal.Header closeButton>
                    <Modal.Title className="text-center">
                      Add Produce
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <AddProduceListing />
                  </Modal.Body>
                  <Modal.Footer>
                    {/* <Button variant="warning" onClick={handleCloseModal}>
                      Exit
                    </Button> */}
                  </Modal.Footer>
                </Modal>
              </div>
              <div class="container-fluid" padding-top="50px">
                <div class="card-body">
                  <div class="container-fluid" padding-top="50px">
                    <div class="row">
                      {user?.listings?.length > 0 ? (
                        user?.listings?.map((listing) => (
                          <div className="card col-md-4" key={listing.id}>
                            <div
                              className="card-header text-center"
                              style={{
                                fontFamily: "Sans-Serif",
                                textTransform: "uppercase",
                                fontSize: "1rem",
                              }}
                            >
                              <h3 style={{ marginRight: "5px" }}>
                                {" "}
                                <strong>{listing.name}</strong>
                              </h3>
                              <Button
                                variant="warning"
                                className="float-right"
                                style={{ marginLeft: "10px", backgroundColor: "#ffc107", color: "#fff", border: "none" }}
                                onClick={handleshowOrder}
                              >
                                {`Orders: ${listing?.orders?.length}`}
                              </Button>
                            </div>
                            <div className="card-body text-center">
                              <p>
                                <strong>Price: KSH</strong> {listing.price}
                              </p>
                              <p>
                                <strong>Quantity: KSH</strong>{" "}
                                {listing.quantity}
                              </p>
                              <img
                                src={`data:image/png;base64, ${listing.image}`}
                                alt=""
                                className="img"
                              />
                            </div>
                          </div>
                        ))
                      ) : (
                        <p>No listings found.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="container-fluid" padding-top="50px">
            <div class="card">
              <div
                class="card-header text-center "
                font-family="Sans-Serif"
                text-transform="uppercase"
                font-size="1.5rem"
              >
                <strong>MY RATINGS</strong>
              </div>
              {/* <div class="container-fluid" padding-top="50px">
                <div class="card-body">
                  <div class="container-fluid" padding-top="50px">
                    <div class="row">
                      {user?.reviews?.map((review) => (
                        <div className="card col-md-4" key={review.id}>
                          <div
                            className="card-header text-center"
                            style={{
                              fontFamily: "Sans-Serif",
                              fontSize: "1rem",
                            }}
                          >
                            <h3 style={{ marginRight: "5px" }}>
                              {" "}
                              <strong>{review.user}</strong>
                            </h3>
                          </div>
                          <div className="card-body text-center">
                            <p>{review.comment}</p>
                            <p>
                              <strong>Rating: ⭐</strong> {review.rating}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
