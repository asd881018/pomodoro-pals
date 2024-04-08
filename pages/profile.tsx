import React, { useEffect, useState } from 'react';
import { CLOUDFRONT_URL } from '../utils/config';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


function Profile() {
  const [authUser, setAuthUser] = useState<string | null>(null);
  useEffect(()=> {
    // console.log("The authuser does NOTTTT exist")

    if (!authUser){
      // console.log("The authuser does exist")
      console.log("The authuser does NOTTTT exist, create a mew user in DB")
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({"userID": authUser, "cycle": 0})

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw
      }

      fetch(`${CLOUDFRONT_URL}/numOfCycles`, requestOptions)
      .then(response => response.text())
      .then(result => alert(JSON.parse(result).body))
      .catch(error => console.log("error", error))
    }
  }, [authUser])

  return (
    <Authenticator>
      {({user }) => {
        setAuthUser(user?.username|| null)
        return(
        <div className='hidden'>
          <h2>USERNAME : {authUser}</h2>
        </div>
        )
        }}
    </Authenticator>
  );
}

export default Profile;