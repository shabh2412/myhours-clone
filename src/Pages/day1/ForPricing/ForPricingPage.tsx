import React from "react";

import { BiDollar } from "react-icons/bi";
import { TiTick } from "react-icons/ti";

import {BsArrowDownShort} from "react-icons/bs"

import "./forPricingPage.css";

interface Card {
  productType: string;
  productTypeDetail: string;
  productPrice: number;
  productDetail?: string[];
  productContain: string[];
  productAction: string;
}

interface Feature01 {
  type: string;
  free: boolean;
  pro: boolean;
}
interface Feature {
  featureType: string;
  featureTypeDetail: Feature01[];
}

let featuresInfo: Feature[] = [
  {
    featureType: "Track",
    featureTypeDetail: [
      {
        type: "Timer or add manually",
        free: true,
        pro: true,
      },
      {
        type: "Timesheet - weekly tracking",
        free: true,
        pro: true,
      },
      {
        type: "Timer - daily tracking",
        free: true,
        pro: true,
      },
      {
        type: "Timeline view",
        free: true,
        pro: true,
      },
      {
        type: "Favorites",
        free: true,
        pro: true,
      },
      {
        type: "Expenses",
        free: true,
        pro: true,
      },
      {
        type: "Detailed description and attachments",
        free: true,
        pro: true,
      },
      {
        type: "Daily tracking reminder (mobile app)",
        free: true,
        pro: true,
      },
      {
        type: "Bulk edit or delete logs",
        free: false,
        pro: true,
      },
      {
        type: "Track custom fields (numeric)",
        free: false,
        pro: true,
      },
    ],
  },
  {
    featureType: "Organize",
    featureTypeDetail: [
      {
        type: "Unlimited projects, tasks and clients",
        free: true,
        pro: true,
      },
      {
        type: "Task and project templates",
        free: true,
        pro: true,
      },

      {
        type: "Task and project descriptions",
        free: true,
        pro: true,
      },
      {
        type: "Group tasks and mark as done	",
        free: true,
        pro: true,
      },
      {
        type: "Budget hours, billable or cost amounts",
        free: false,
        pro: true,
      },
      {
        type: "Budget alerts to email",
        free: false,
        pro: true,
      },
      {
        type: "Monthly budget",
        free: false,
        pro: true,
      },
      {
        type: "Task budgets or estimates	",
        free: false,
        pro: true,
      },
      {
        type: "Assign tasks to team members	",
        free: false,
        pro: true,
      },
    ],
  },
  {
    featureType: "Billing",
    featureTypeDetail: [
      {
        type: "Billable rate per project	",
        free: true,
        pro: true,
      },
      {
        type: "Billable rate per tasks or team member",
        free: false,
        pro: true,
      },
      {
        type: "Labor costs (Team costs)",
        free: false,
        pro: true,
      },
      {
        type: "Calculate profit & loss",
        free: false,
        pro: true,
      },
      {
        type: "Auto-round billable time",
        free: false,
        pro: true,
      },
      {
        type: "Invoicing",
        free: false,
        pro: true,
      },
    ],
  },
  {
    featureType: "Report",
    featureTypeDetail: [
      {
        type: "Dashboard",
        free: true,
        pro: true,
      },
      {
        type: "Customize a detailed report (Activity)",
        free: true,
        pro: true,
      },
      {
        type: "Send reports to Email	",
        free: true,
        pro: true,
      },
      {
        type: "Download to PDF, export to XLS",
        free: true,
        pro: true,
      },
      {
        type: "Timesheet report",
        free: true,
        pro: true,
      },
      {
        type: "Schedule detailed reports to email",
        free: false,
        pro: true,
      },
      {
        type: "Team pivot report",
        free: false,
        pro: true,
      },
      {
        type: "Economy report",
        free: false,
        pro: true,
      },
      {
        type: "Download & customize reports in Excel	",
        free: false,
        pro: true,
      },
      {
        type: "Own logo on PDF reports	",
        free: false,
        pro: true,
      },
    ],
  },
  {
    featureType: "Team",
    featureTypeDetail: [
      {
        type: "Unlimited team members",
        free: true,
        pro: true,
      },
      {
        type: "Role: Administrator",
        free: true,
        pro: true,
      },
      {
        type: "	Role: Normal member",
        free: true,
        pro: true,
      },
      {
        type: "	Role: Project manager",
        free: false,
        pro: true,
      },
      {
        type: "	Group members into Teams",
        free: false,
        pro: true,
      },
      {
        type: "Hide billing and cost details	",
        free: false,
        pro: true,
      },
      {
        type: "Require project and task input",
        free: false,
        pro: true,
      },
      {
        type: "Approval workflow",
        free: false,
        pro: true,
      },
      {
        type: "Add, edit or delete team's logs",
        free: false,
        pro: true,
      },
      {
        type: "Auto-lock time logs",
        free: false,
        pro: true,
      },
      {
        type: "Tracking reminders",
        free: false,
        pro: true,
      },
    ],
  },
  {
    featureType: "Integrations & Apps",
    featureTypeDetail: [
      {
        type: "Import timesheets, projects and clients	",
        free: true,
        pro: true,
      },
      {
        type: "Mobile apps",
        free: true,
        pro: true,
      },
      {
        type: "API access",
        free: true,
        pro: true,
      },
      {
        type: "Zapier integration",
        free: true,
        pro: true,
      },
      {
        type: "Quickbooks native integration	",
        free: false,
        pro: true,
      },
    ],
  },
];

const fnq: string[] = [
  "Will I be charged after the 14 day trail?",
  "Can I switch to a free account after the Pro Trial",
  "What if we need more than 14 days to test the Pro edition?",
  "What's included in the Pro Trial?",
  "What kind of payment do you accept?",
  "Do you offer discounts?",
  "What type of support is included?",
  "Can I get a refund?",
  "Can I  deactivate inactive team members?",
];

let cardInfo: Card[] = [
  {
    productType: "free",
    productTypeDetail:
      "For individuals or teams just getting started with time tracking.",
    productPrice: 0,
    productContain: [
      "Unlimited team members & projects",
      "Track time on projects & tasks",
      "Set billable rates",
      "Generate detailed reports",
    ],
    productAction: "Select",
  },
  {
    productType: "pro",
    productTypeDetail:
      "For freelancers and teams actively managing their time.",
    productPrice: 6,
    productContain: [
      "Everything in free PLUS",
      "Priority support",
      "Generate client invoices",
      "Add & edit logs on behalf of your team",
      "Approval workflow with Audit log",
      "Extra features…",
    ],
    productAction: "14 day free trail",
  },
];

type Props = {};

const ForPricing = (props: Props) => {
  return (
    <>
      <div className="container">
        <div className="headerContainer ">
          <div className="headerTopContainer">
            <h1 className="slimHeading">Pick your plan</h1>
            <p  style={{width:'80%' , margin:"1rem auto" ,fontSize:"200%", fontWeight:"600" }} >
              Track time on projects with your team.
            </p>
          </div>

          <div className="headerBottomContainer">
            {cardInfo.map((el: Card, ind: number) => {
              return (
                <div className="priceCard">
                  <div
                    style={{
                      color: "#212529",
                      fontSize: "2rem",
                      fontWeight: "500",
                    }}
                  >
                    {el.productType}
                  </div>

                  <p>{el.productTypeDetail}</p>

                  <div
                    style={{
                      color: "#212529",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "3rem",
                        fontWeight: "500",
                        padding: "0.25rem 0",
                        margin: "0.5rem 0",
                      }}
                    >
                      {el.productPrice}
                    </span>
                    <BiDollar />
                  </div>

                  <ul style={{ color: "#212529" }}>
                    {el.productContain.map((ele: string, idx: number) => (
                      <li
                        style={{
                          color: "#212529",
                          padding: "0.25rem 0",
                          margin: "0.25rem 0",
                        }}
                      >
                        {ele}
                      </li>
                    ))}
                  </ul>

                  <button
                    style={{
                      color: "#212529",
                      width: "100%",
                      border: "2px solid #212529 ",
                      padding: "0.25rem 0",
                      margin: "1rem 0",
                      cursor: "pointer",
                    }}
                  >
                    {el.productAction}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            margin: "1.5rem",
          }}
          className="featureContainer"
        >
          <div className="featureHead">
            <ul
              style={{ listStyleType: "none", width: "100%", display: "flex" }}
            >
              <li
                style={{
                  width: "70%",
                  fontWeight: "550",
                  marginLeft: "4px",
                }}
              >
                Feature
              </li>{" "}
              <li style={{ width: "15%", fontWeight: "550" }}>Free</li>{" "}
              <li style={{ width: "15%", fontWeight: "550" }}>Pro</li>
            </ul>
            </div>

            <div className="featureBottom ">
            {featuresInfo.map((el: Feature, ind: number) => {
              return (
                <>
                  <ul
                    key={ind}
                    style={{
                      listStyleType: "none",
                      width: "100%",
                      display: "flex",
                      backgroundColor: " #DCDCDC",
                      margin: "1% 0",
                      padding: "1% 0",
                    }}
                  >
                    <li
                      style={{
                        width: "70%",
                        fontWeight: "550",
                        marginLeft: "4px",
                      }}
                    >
                      {el.featureType}
                    </li>{" "}
                    <li style={{ width: "15%" }}>{}</li>{" "}
                    <li style={{ width: "15%" }}>{}</li>
                  </ul>
                  {el.featureTypeDetail.map((ele: Feature01, idx: number) => {
                    return (
                      <ul
                        key={idx}
                        style={{
                          listStyleType: "none",
                          width: "100%",
                          display: "flex",
                          borderBottom: "1px solid #DCDCDC",
                        }}
                      >
                        <li style={{ width: "70%" }}>{ele.type}</li>{" "}
                        <li style={{ width: "15%" }}>
                          {ele.free ? <TiTick /> : null}
                        </li>{" "}
                        <li style={{ width: "15%" }}>
                          {ele.pro ? <TiTick /> : null}
                        </li>
                      </ul>
                    );
                  })}
                </>
              );
            })}

            </div>
        
        </div>

        <div className="fnqContainer">
          

            <h1 className="fnqHead" style={{fontSize:"2.5rem"}}  >
            Frequently Asked Questions
            </h1>
         
          <div className="fnqQuestion ">

              {
                fnq.map((el:string,ind:number)=>{

                  return (

                    <div style={{display:"flex", justifyContent:"space-between" }} key={ind} >
                        {el}
                        <BsArrowDownShort/>
                    </div>

                  )
                })
                
              }

          </div>
        </div>

        <div className="footerContainer">

            <div className="footerUpper">

          <div className="thought">
            “ I have tested similar time tracking apps but they all have limits.
            My Hours is without a doubt the most important tool I use in my
            business. ”
          </div>

          <div className="facts">
            <div>
              <h3>MEMBERS</h3>
              <h1>250 k</h1>
            </div>
            <div>
              <h3>LOGGED HOURS</h3>
              <h1>1.6 b</h1>
            </div>
            <div>
              <h3>AVERAGE RATING</h3>
              <h1>4.7 /5</h1>
            </div>
          </div>
          </div>


          <div className="footerBottom">
            <div className="right">
              <h1 style={{fontSize:"2rem"}}  >Waste no more time, jump right in!</h1>
              <button  style={{backgroundColor:"#7ccbfc" , color:"#fff" ,padding:"1rem",margin:"0.5rem 0" }}  >Get Started - It's Free</button>
              <p  style={{color: "#212529"}} >
                My Hours is Free to use for teams of any size. Pro paid plan
                comes with additional features like invoicing, admin controls
                and priority support.
              </p>
            </div>
            <div className="left">
              <h1 style={{fontSize:"2rem"}}  >Need more info? Get a product demo.</h1>

              <button  style={{backgroundColor:"#fff" , color:"#7ccbfc" ,padding:"1rem",margin:"0.5rem 0" , border:"1px solid #7ccbfc" }}  >Talk to our Team</button>

              <p  style={{color: "#212529"}}  > 
                Teams of 6+ are welcome to book a personalized demo to see how
                My Hours works in detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForPricing;