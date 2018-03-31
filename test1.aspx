<%@ Page Title="test1" Language="C#" AutoEventWireup="true" CodeBehind="test1.aspx.cs" Inherits="hsUserView.test1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<form id="form1" runat="server">
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:vShearthstoneConnectionString %>" SelectCommand="SELECT [GAME_HERO], [GAME_DECK], [GAME_OPPONENT_HERO], [GAME_OPPONENT_DECK], [GAME_DURATION], [GAME_RANK], [GAME_REGION], [GAME_DATE], [GAME_RESULT] FROM [GameData] WHERE ([PLAYER_NAME] = @PLAYER_NAME)">
        <SelectParameters>
            <asp:ControlParameter ControlID="TextBox1" Name="PLAYER_NAME" PropertyName="Text" Type="String" />
        </SelectParameters>
    </asp:SqlDataSource>
    <p>
        GETTING YOUR MATCH HISTORY</p>
    <p>
        Enter Your Player Name:
        <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
&nbsp;&nbsp;
        <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Go" />
    </p>
    <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataSourceID="SqlDataSource1">
        <Columns>
            <asp:BoundField DataField="GAME_HERO" HeaderText="GAME_HERO" SortExpression="GAME_HERO" />
            <asp:BoundField DataField="GAME_DECK" HeaderText="GAME_DECK" SortExpression="GAME_DECK" />
            <asp:BoundField DataField="GAME_OPPONENT_HERO" HeaderText="GAME_OPPONENT_HERO" SortExpression="GAME_OPPONENT_HERO" />
            <asp:BoundField DataField="GAME_OPPONENT_DECK" HeaderText="GAME_OPPONENT_DECK" SortExpression="GAME_OPPONENT_DECK" />
            <asp:BoundField DataField="GAME_DURATION" HeaderText="GAME_DURATION" SortExpression="GAME_DURATION" />
            <asp:BoundField DataField="GAME_RANK" HeaderText="GAME_RANK" SortExpression="GAME_RANK" />
            <asp:BoundField DataField="GAME_REGION" HeaderText="GAME_REGION" SortExpression="GAME_REGION" />
            <asp:BoundField DataField="GAME_DATE" HeaderText="GAME_DATE" SortExpression="GAME_DATE" />
            <asp:BoundField DataField="GAME_RESULT" HeaderText="GAME_RESULT" SortExpression="GAME_RESULT" />
        </Columns>
    </asp:GridView>
</form>
</html>
