<%@ Page Title="Login" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="hsUserView.login" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
        
    <asp:Image ID="loginlogo" runat="server" Height="86px" ImageUrl="~/pictures/logo.png" Width="392px" />
    
    <div class="jumbotron">
        <h1>Login</h1>
        <h2>Username: </h2><asp:TextBox ID="usernameInput" runat="server"></asp:TextBox><br />
        <h2>Password: </h2><asp:TextBox ID="passwordInput" runat="server"></asp:TextBox><br />
        <asp:Button ID="jumpButten" runat="server" Text="Go" OnClick="go_butten_click" />
        <asp:Literal ID="errorMessage" runat="server" Text="Sorry, We cannot identify your username or password, please try again."></asp:Literal>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:vShearthstoneConnectionString %>" OnSelecting="SqlDataSource1_Selecting" SelectCommand="SELECT [PLAYER_USERNAME] FROM [PlayerData]"></asp:SqlDataSource>
    </div>
</asp:Content>
