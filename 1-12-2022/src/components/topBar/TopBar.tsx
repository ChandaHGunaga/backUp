import './TopBar.css'

const TopBar = () => {
  return (
    <div className="topBar-Container">
      <div className="topBar-Header">
        <div className="topBar-addCourse">Add Courses</div>
        <div className="topBar-headerIcons">
          <div className="topBar-publish">
            <div className="topBar-publishText">Publish to web</div>
            <div className="topBar-publishIcon">
              <img
                src={require('../../assets/icons/Web_upload.png')}
                alt=""
                className="toolBar-publishImg"
              />
            </div>
          </div>
          <div className="topBar-profile">
            <div className="topBar-profileItem">
              <img
                src={require('../../assets/Screenshot 2022-05-16 104609.png')}
                alt=""
                className="topBar-profileIcon"
              />
            </div>
            <div className="topBar-profileText">Manjay Gupta</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
