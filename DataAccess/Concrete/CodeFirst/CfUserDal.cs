using Core.DataAccess.CodeFirst;
using DataAccess.Abstract;
using Entities.Concrete;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.Concrete.CodeFirst
{
    public class CfUserDal : CodeFirstRepositoryBase<User, UserContext>, IUserDal
    {
    }
}
