using MySnacker.Domain.Entities;

namespace MySnacker.Domain.Interfaces.Data
{
    public interface IRequestRepository
    {
        void Store(Request request);
    }
}
