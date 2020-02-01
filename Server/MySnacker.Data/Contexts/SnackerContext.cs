using Microsoft.EntityFrameworkCore;
using MySnacker.Data.Configurations;
using MySnacker.Domain.Entities;

namespace MySnacker.Data.Contexts
{
    public class SnackerContext : DbContext
    {
        public DbSet<Request> Requests { get; set; }

        public DbSet<Flavor> Flavors { get; set; }

        public DbSet<Measure> Mesures { get; set; }

        public DbSet<Snack> Snacks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.ApplyConfiguration(new AdditionalCOnfiguration());
            modelBuilder.ApplyConfiguration(new FlavorConfiguration());
            modelBuilder.ApplyConfiguration(new MeasureConfiguration());
            modelBuilder.ApplyConfiguration(new RequestConfiguration());
            modelBuilder.ApplyConfiguration(new RequestAdditionalConfiguration());
        }

        public SnackerContext(DbContextOptions<SnackerContext> options)
          : base(options)
        {
        }
    }
}
