/*import React, { useEffect, useState } from 'react';
const TrainListbyId = () => {
    const [train, setTrain] = useState({
        trainId: "",
        trainName: "",
        source: "",
        destination: "",
        route: [routes],
        pricePerKms: "",
        daysOfRunning: [],
        totalNumOfSeats: "",
        trainClass: [trainClasses],
    });

    function updateRoute(prop, value) {
        const newRoute = { ...train.route };
        newRoute[prop] = value;
        setRoutes(newRoute);
    }

    function updateTrainClass(prop, value) {
        const newTrainClass = { ...train.trainClass };
        newTrainClass[prop] = value;
        setTrainClasses(newTrainClass);
    }
    function updateTrain(prop, value) {
        const newTrain = { ...train.trainClass };
        newTrain[prop] = value;
        setTrain(newTrain);
    }

    function save() {
        adminSecurity(`/admin/updateTrain/${trainId}`, "PUT", jwt, train).then(
            (trainData) => {
                setTrain(trainData);
            }
        )
    }


    useEffect(() => {
        adminSecurity(`/admin/listTrainById/${trainId}`, "GET", jwt).then(
            (trainData) => {
                setTrain(trainData);
            }
        );
    }, []);

    return (
        <div>
            <h2>
                Train Number :
                <input type="number"
                    id="trainId"
                    onChange={(e) => updateTrain("trainId", e.target.value)}
                    value={train.trainId}
                />


            </h2>
            {
                train ? (
                    <>
                        <h2>Train Name:
                            <input
                                type="text"
                                id="trainName"
                                onChange={(e) => updateTrain("trainName", e.target.value)}
                                value={train.trainName}
                            />
                        </h2>
                        <h2>Source:
                            <input
                                type="text"
                                id="trainName"
                                onChange={(e) => updateTrain("source", e.target.value)}
                                value={train.trainName}
                            />
                        </h2>
                        <h2>Destination:
                            <input
                                type="text"
                                id="trainName"
                                onChange={(e) => updateTrain("source", e.target.value)}
                                value={train.trainName}
                            />
                        </h2>

                        <h2>Route</h2>
                        {
                            train.route.map((item) => {
                                return (
                                    <ul>
                                        <div key={item.routeId}>
                                            <li>
                                                RouteId:
                                                <input type="number"
                                                    id="routeId"
                                                    onChange={updateRoute}
                                                    value={route.routeId}
                                                />
                                            </li>
                                            <li>
                                                Station name:
                                                <input type="text"
                                                    id="stationName"
                                                    onChange={updateRoute}
                                                    value={item.stationName}
                                                />
                                            </li>
                                            <li>
                                                Time of arrival:
                                                <input type="text"
                                                    id="timeOfArrival"
                                                    onChange={updateRoute}
                                                    value={item.timeOfArrival}
                                                />
                                            </li>
                                            <li>
                                                Time of Departure:
                                                <input type="text"
                                                    id="timeOfArrival"
                                                    onChange={updateRoute}
                                                    value={item.timeOfArrival}
                                                />
                                            </li>
                                            <li>
                                                Total distance:
                                                <input type="number"
                                                    id="totalDistance"
                                                    onChange={updateRoute}
                                                    value={item.totalDistance}
                                                />
                                            </li>
                                            <br />
                                        </div>
                                    </ul>
                                );
                            }
                            )

                        }
                        <h2>
                            price per kms:
                            <input
                                type="text"
                                id="trainName"
                                onChange={(e) => updateTrain("pricePerKms", e.target.value)}
                                value={train.pricePerKms}
                            />
                        </h2>

                        <h2>
                            Days of Running:
                            <input
                                type="text"
                                id="daysOfRunning"
                                onChange={(e) => updateTrain("daysOfRunning", e.target.value)}
                                value={train.daysOfRunning}
                            />
                        </h2>
                        <h2>
                            total number of seats:
                            <input
                                type="number"
                                id="totalNumOfSeats"
                                onChange={(e) => updateTrain("totalNumOfSeats", e.target.value)}
                                value={train.totalNumOfSeats}
                            />
                        </h2>



                        <h2>Train class</h2>
                        {
                            train.route.map((item) => {
                                return (
                                    <ul>
                                        <div key={item.trainClass}>
                                            <li>
                                                class name:
                                                <input type="text"
                                                    id="className"
                                                    onChange={updateTrainClass}
                                                    value={trainClass.className}
                                                />
                                            </li>
                                            <li>
                                                price:
                                                <input type="number"
                                                    id="price"
                                                    onChange={updateTrainClass}
                                                    value={item.price}
                                                />
                                            </li>
                                            <li>
                                                number of seats
                                                <input type="text"
                                                    id="noOfSeats"
                                                    onChange={updateTrainClass}
                                                    value={item.noOfSeats}
                                                />
                                            </li>


                                            <br />
                                        </div>
                                    </ul>

                                );
                            }
                            )

                        }

                    </>


                ) : (
                    <></>

                )
            }
        </div >
)};
export default TrainListbyId;


              

                        

*/


