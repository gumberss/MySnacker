using MySnacker.Domain.Entities;

namespace MySnacker.Domain.Interfaces.ApplicationServices
{
    public interface IRequestAppService
    {
        void Store(Request request);
    }
}
