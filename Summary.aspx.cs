using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using hsUserView.Classes;

namespace hsUserView
{
    public partial class Summary : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            // Get the username and player ID from session
            string userName = (string)(Session["userName"]);
            Int32 nPlayerID = (Int32)(Session["playerID"]);

            // Player Statistics
            Int32 nTotalGames = 0;
            Double dAvgGameDuration = .0;
            Int32 nGamesWon = 0;
            Double dWinrate = .0;
            string szMostPlayedClass = "Unknown Class";
            string szMostPlayedDeck = "Unknown Deck";

            // Read the total number of games and average duration
            SqlConnection connection = new SqlConnection(DBManager.GetConnection("vShearthstoneConnectionString"));
            SqlCommand cmd1 = new SqlCommand(
                "select count(*) as COUNT, avg(cast(duration as float))AS AVG_DURATION from GameData where GameData.player_id = " + nPlayerID
                , connection);
            connection.Open();
            SqlDataReader reader1 = cmd1.ExecuteReader();
            
            if (reader1.HasRows)
            {
                while (reader1.Read())
                {
                    nTotalGames = reader1.GetInt32(reader1.GetOrdinal("COUNT"));
                    dAvgGameDuration = reader1.GetDouble(reader1.GetOrdinal("AVG_DURATION"));
                }
            }
            reader1.Close();

            GamesPlayedValue.Text = nTotalGames.ToString();
            dAvgGameDuration = Math.Round(dAvgGameDuration, 2);
            MatchLengthValue.Text = dAvgGameDuration.ToString() + " seconds";
            
            // Red the games won and calculate win rate
            SqlCommand cmd2 = new SqlCommand(
                "select count(*) as COUNT from GameData where GameData.player_id = " + nPlayerID + " and win = 1"
                , connection);
            SqlDataReader reader2 = cmd2.ExecuteReader();
            if (reader2.HasRows)
            {
                while (reader2.Read())
                {
                    nGamesWon = reader2.GetInt32(reader2.GetOrdinal("COUNT"));
                }
            }
            dWinrate = Math.Round(((Double)nGamesWon / nTotalGames) * 100, 2);
            WinrateValue.Text = dWinrate.ToString() + "%";
            reader2.Close();


            SqlCommand cmd4 = new SqlCommand(
               "select top 1 hero, count(*) as C from GameData  where GameData.player_id = " + nPlayerID + " group by hero order by 2 desc"
               , connection);
            SqlDataReader reader4 = cmd4.ExecuteReader();
            if (reader4.HasRows)
            {
                while (reader4.Read())
                {
                    szMostPlayedClass = reader4.GetString(reader4.GetOrdinal("hero"));
                }
            }
            MostPlayedClassValue.Text = szMostPlayedClass;
            reader4.Close();


            SqlCommand cmd5 = new SqlCommand(
               "select top 1 hero_deck, count(*) as C from GameData where GameData.player_id = " + nPlayerID + " group by hero_deck order by 2 desc"
               , connection);
            SqlDataReader reader5 = cmd5.ExecuteReader();
            if (reader5.HasRows)
            {
                while (reader5.Read())
                {
                    szMostPlayedDeck = reader5.GetString(reader5.GetOrdinal("hero_deck"));
                }
            }
            MostPlayedDeckValue.Text = szMostPlayedDeck;
            reader5.Close();
        }   

        protected void history_button_click (object sender, EventArgs e)
        {
            Response.Redirect("History.aspx");
        }

        protected void details_button_click(object sender, EventArgs e)
        {
            Response.Redirect("Details.aspx");
        }
    }
}