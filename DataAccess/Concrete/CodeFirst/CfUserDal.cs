using Core.DataAccess.CodeFirst;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.Concrete.CodeFirst
{
    public class CfUserDal : CodeFirstRepositoryBase<User,UserContext>, IUserDal
    {
    }
}
