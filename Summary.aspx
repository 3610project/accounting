<%@ Page Title="Summary" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Summary.aspx.cs" Inherits="hsUserView.Summary" %>

<%@ Register assembly="System.Web.DataVisualization, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" namespace="System.Web.UI.DataVisualization.Charting" tagprefix="asp" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
        
    <asp:Image ID="loginlogo" runat="server" Height="86px" ImageUrl="~/pictures/logo.png" Width="392px" />
    <div>

        <div id="navigation_bar" class="navigation_bar">
            <asp:Button ID="Button1" runat="server" BorderStyle="Solid" Font-Bold="True" Text="Summary" />
            <asp:Button ID="Button2" runat="server" OnClick="details_button_click" Text="Details" />
            <asp:Button ID="Button3" runat="server" Height="26px" OnClick="history_button_click" Text="History" Width="63px" />
        </div>

        <div id="user_profile" class="user_profile">
            <table>
                <tr>
                    <td colspan="2">
                        <asp:Image ID="ProfilePicture" runat="server" AlternativeText="ProfilePicture" ImageAlign="Left" />
                    </td>
                </tr>
                <tr>
                    <td><asp:Label ID="GamesPlayedLabel" runat="server" Text="Games Played:"></asp:Label></td>
                    <td><asp:Label ID="GamesPlayedValue" runat="server"></asp:Label></td>
                </tr>
                <tr>
                    <td><asp:Label ID="WinrateLabel" runat="server" Text="Overall Winrate:"></asp:Label></td>
                    <td><asp:Label ID="WinrateValue" runat="server"></asp:Label></td>
                </tr>
                <tr>
                    <td><asp:Label ID="MatchLengthLabel" runat="server" Text="Average Match Length:"></asp:Label></td>
                    <td><asp:Label ID="MatchLengthValue" runat="server"></asp:Label></td>
                </tr>
                <tr>
                    <td><asp:Label ID="MostPlayedClassLabel" runat="server" Text="Most Played Class:"></asp:Label></td>
                    <td><asp:Label ID="MostPlayedClassValue" runat="server"></asp:Label></td>
                </tr>
                <tr>
                    <td><asp:Label ID="MostPlayedDeckLabel" runat="server" Text="Most Played Deck:"></asp:Label></td>
                    <td><asp:Label ID="MostPlayedDeckValue" runat="server"></asp:Label></td>
                </tr>
            </table>
        </div>
        
    </div>
    

</asp:Content>
