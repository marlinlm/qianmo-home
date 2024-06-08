import Link from "next/link";

const TeamList = ({ short }) => {
  const teams = [
    {
      id: 1,
      name: "Roten Barsa",
      designation: "IT Managment",
      img: "assets/images/team/team8.png",
    },
    {
      id: 2,
      name: "Greg Grinstead",
      designation: "IT Managment",
      img: "assets/images/team/team9.png",
    },
    {
      id: 3,
      name: "Elijah Williaml",
      designation: "IT Managment",
      img: "assets/images/team/team10.png",
    },
    {
      id: 4,
      name: "Nicole Finnan",
      designation: "IT Managment",
      img: "assets/images/team/team11.png",
    },
    {
      id: 5,
      name: "Kevin Martin     ",
      designation: "IT Managment",
      img: "assets/images/team/team12.png",
    },
    {
      id: 6,
      name: "Roten Barsaw",
      designation: "IT Managment",
      img: "assets/images/team/team13.png",
    },
    {
      id: 7,
      name: "Barsaw Albart",
      designation: "IT Managment",
      img: "assets/images/team/team14.png",
    },
    {
      id: 8,
      name: "Roten Burl",
      designation: "IT Managment",
      img: "assets/images/team/team20.png",
    },
  ];

  return (
    <div className="team-area style-three">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <div className="section-sub-title">
                <h4>OUR WORKERS</h4>
              </div>
              <div className="section-main-title">
                <h2>Working With Excellentour</h2>
                <h2>Great Team</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {teams.map((team) => (
            <div
              className={`col-md-6 col-xl-3 ${
                short ? (team.id > 4 ? "d-none" : "") : ""
              }`}
              key={team.id}
            >
              <div className="team-items-box inner-page">
                <div className="team-itmes-content">
                  <h4>
                    <Link legacyBehavior href="team-details">
                      {team.name}
                    </Link>
                  </h4>
                  <span>{team.designation}</span>
                </div>
                <div className="team-items-thumb">
                  <img src={team.img} alt="" />
                  <div className="team-main-icon">
                    <a href="#">
                      <i className="bi bi-plus-lg" />
                    </a>
                  </div>
                  <div className="team-sub-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-vimeo-v" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TeamList;
