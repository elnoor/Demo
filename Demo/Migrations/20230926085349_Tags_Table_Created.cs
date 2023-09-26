using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Demo.Migrations
{
    /// <inheritdoc />
    public partial class Tags_Table_Created : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Tags",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Portfolio = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Programs = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Scope = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Location = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AgileAdoption = table.Column<int>(type: "int", nullable: false),
                    TeamFormation = table.Column<int>(type: "int", nullable: false),
                    ProductLines = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BusinessLines = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StartegicObjectives = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ValueStream = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DeliveryStreams = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ContinuousImprovement = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ParticipantGroup = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tags", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Tags");
        }
    }
}
