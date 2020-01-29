using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MySnacker.Domain.Entities;

namespace MySnacker.Data.Configurations
{
    public class MeasureConfiguration : IEntityTypeConfiguration<Measure>
    {
        public void Configure(EntityTypeBuilder<Measure> builder)
        {
            builder.ToTable("Measures");

            builder.HasKey(x => x.Id);

            builder
                .Property(x => x.Size)
                .HasMaxLength(20)
                .IsRequired();

            builder
                .Property(x => x.Price)
                .IsRequired();

            builder
                .Property(x => x.PreparationTime)
                .IsRequired();

            builder
                .Property(x => x.Description)
                .HasMaxLength(20)
                .IsRequired();

            builder
                .Property(x => x.SnackId)
                .IsRequired();
        }
    }
}
