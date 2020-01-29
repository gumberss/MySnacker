using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MySnacker.Domain.Entities;

namespace MySnacker.Data.Configurations
{
    public class FlavorConfiguration : IEntityTypeConfiguration<Flavor>
    {
        public void Configure(EntityTypeBuilder<Flavor> builder)
        {
            builder.ToTable("Flavors");

            builder.HasKey(x => x.Id);

            builder
                .Property(x => x.Name)
                .HasMaxLength(20)
                .IsRequired();

            builder.Property(x => x.PreparationTime).IsRequired();

            builder.Property(x => x.SnackId).IsRequired();

         
        }
    }
}
