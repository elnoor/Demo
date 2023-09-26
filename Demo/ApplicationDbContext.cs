using Demo.Models;
using Microsoft.EntityFrameworkCore;

namespace Demo
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Tag> Tags { get; set; }
    }
}
