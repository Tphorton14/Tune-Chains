module.exports = function (sequelize, DataTypes) {

    var User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_email: DataTypes.STRING,
        
        user_password: {
            type: DataTypes.STRING,
        },
        artistname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        googleProviderId: DataTypes.STRING,
        googleProviderToken: DataTypes.STRING
    });

    User.upsertGoogleUser = function (accessToken, refreshToken, profile, cb) {
        return this.findOne({
            where: {
                'googleProviderId': profile.id
            }
        }).then((user) => {
            // no user was found, lets create a ne  w one
            if (!user) {
                var newUser = new this({
                    user_name: profile.displayName,
                    user_email: profile.emails[0].value,
                    googleProviderId: profile.id,
                    googleProviderToken: accessToken
                });

                newUser.save()
                    .then(function (savedUser) {
                        return cb(null, savedUser);
                    }).catch(function (err) {
                        return console.log(err);
                    });
            } else {
                cb(null, user);
            }
        }).catch(function (err) {
            return cb(err);
        })
    };

    User.associate = function (models) {
        User.hasMany(models.Song, {
            onDelete: "cascade"
        });
    };
    return User;
};
