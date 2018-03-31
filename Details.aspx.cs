using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data.OleDb;
using System.Data;

namespace hsUserView
{
    public partial class Details : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //string userName = (string)(Session["userName"]);
            //string playerName = (string)(Session["playerName"]);
            //Int32 playerID = (Int32)(Session["playerID"]);
            //SqlDataSource1.SelectCommand = "select [Game_Hero], [Game_Deck], count(*) as [C] from [GameData] join [PlayerData] on [GameData].[Player_Name] = [PlayerData].[Player_Name] where [Player_Username] = '" + userName + "' group by [Game_Deck], [Game_Hero] order by 3 desc";
        }
        protected void history_button_click(object sender, EventArgs e)
        {
            Response.Redirect("History.aspx");
        }

        protected void summary_button_click(object sender, EventArgs e)
        {
            Response.Redirect("Summary.aspx");
        }

    }
}