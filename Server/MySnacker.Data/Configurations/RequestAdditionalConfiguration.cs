using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MySnacker.Domain.Entities;

namespace MySnacker.Data.Configurations
{
    public class RequestAdditionalConfiguration : IEntityTypeConfiguration<RequestAdditional>
    {
        public void Configure(EntityTypeBuilder<RequestAdditional> builder)
        {
            builder.ToTable("RequestAdditional");

            builder
                .HasKey(x => new { x.RequestId, x.AdditionalId });

            builder
               .HasOne(x => x.Additional)
               .WithMany(x => x.RequestAdditional);

            builder
               .HasOne(x => x.Request)
               .WithMany(x => x.RequestAdditional);
        }
    }
}
