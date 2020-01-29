using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MySnacker.Domain.Entities;

namespace MySnacker.Data.Configurations
{
    public class AdditionalConfiguration : IEntityTypeConfiguration<Additional>
    {
        public void Configure(EntityTypeBuilder<Additional> builder)
        {
            builder.ToTable("Additionals");

            builder.HasKey(x => x.Id);

            builder
              .Property(x => x.Name)
              .HasMaxLength(20)
              .IsRequired();

            builder
              .Property(x => x.PreparationTime)
              .IsRequired();

            builder
              .Property(x => x.AdditionalPrice)
              .IsRequired();
        }
    }
}
