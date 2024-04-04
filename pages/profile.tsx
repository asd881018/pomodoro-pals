import React, { useEffect, useState } from 'react';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


function Profile() {
  const [authUser, setAuthUser] = useState<string | null>(null);
  useEffect(()=> {
    console.log("The authuser does NOTTTT exist")

    if (authUser){
      console.log("The authuser does exist")
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({"userID": authUser, "cycle": 0})

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw
      }

      fetch("https://pa54p2pdh7.execute-api.us-east-1.amazonaws.com/dev", requestOptions)
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
          <h2>HERE IS THE USERNAME AGAIN {authUser}</h2>
        </div>
        )
        }}
    </Authenticator>
  );
}

export default Profile;