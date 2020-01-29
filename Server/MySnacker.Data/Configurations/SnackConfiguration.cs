using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MySnacker.Domain.Entities;

namespace MySnacker.Data.Configurations
{
    public class SnackConfiguration : IEntityTypeConfiguration<Snack>
    {
        public void Configure(EntityTypeBuilder<Snack> builder)
        {
            builder.ToTable("Snacks");

            builder.HasKey(x => x.Id);

            builder
                .Property(x => x.Name)
                .HasMaxLength(20)
                .IsRequired();

            builder
                .HasMany(x => x.Flavors)
                .WithOne(x => x.Snack)
                .HasForeignKey(x => x.SnackId)
                .IsRequired();

            builder
                .HasMany(x => x.Measures)
                .WithOne(x => x.Snack)
                .HasForeignKey(x => x.SnackId)
                .IsRequired();

            builder
               .HasMany(x => x.Measures)
               .WithOne(x => x.Snack)
               .HasForeignKey(x => x.SnackId)
               .IsRequired();
        }
    }
}
