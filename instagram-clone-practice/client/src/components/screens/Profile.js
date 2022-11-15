import React from 'react'

const Profile = () => {
  return (
      <div style={{maxWidth:"550px", margin:"0px auto"}}>
        <div style = {{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0px",
          borderBottom: "1px solid grey"
        }}>
          <div>
            <img style = {{width:"160px", height:"160px", borderRadius:"80px"}}
            src="https://images.unsplash.com/photo-1523956468692-1e219561ea46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"
            />
          </div>
          <div>
            <h4>Bob Bobberson</h4>
            <div style={{display:"flex", justifyContent:"space-between", width:"108%"}}>
              <h6>40 posts</h6>
              <h6>40 followers</h6>
              <h6>40 following</h6>
            </div>
          </div>
        </div>
        <div className="gallery">
          <img className="item" src="https://images.unsplash.com/photo-1523956468692-1e219561ea46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60" />
          <img className="item" src="https://images.unsplash.com/photo-1523956468692-1e219561ea46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60" />
          <img className="item" src="https://images.unsplash.com/photo-1523956468692-1e219561ea46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60" />
          <img className="item" src="https://images.unsplash.com/photo-1523956468692-1e219561ea46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60" />
          <img className="item" src="https://images.unsplash.com/photo-1523956468692-1e219561ea46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60" />
          <img className="item" src="https://images.unsplash.com/photo-1523956468692-1e219561ea46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60" />
        </div>
      </div>
  )
}
export default Profile