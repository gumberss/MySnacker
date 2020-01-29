using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MySnacker.Domain.Entities;

namespace MySnacker.Data.Configurations
{
    public class RequestConfiguration : IEntityTypeConfiguration<Request>
    {
        public void Configure(EntityTypeBuilder<Request> builder)
        {
            builder.ToTable("Requests");

            builder.HasKey(x => x.Id);

            builder
                .HasOne(x => x.Flavor)
                .WithMany(x => x.Requests)
                .HasForeignKey(x => x.FlavorId);

            //todo: configurar aditional

            builder
                .HasOne(x => x.Snack)
                .WithMany(x => x.Requests)
                .HasForeignKey(x => x.SnackId);

            builder
                .HasOne(x => x.Measure)
                .WithMany(x => x.Requests)
                .HasForeignKey(x => x.MeasureId);

            builder
              .Property(x => x.PreparationTime)
              .IsRequired();
        }
    }
}
