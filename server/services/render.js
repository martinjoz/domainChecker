const isValid = require('is-valid-domain');
const whois = require('whois-json');


exports.homeRoute = (req, res) => {
    res.render('domain');
}
exports.verifyDomain = async(req, res) => {
    var domain = req.body.domain;
    var results = await whois(domain);
    if (results.domainName) {
        res.render('verify', {
            data: results,
            flag: true,
            domain: domain
        })
    } else {
        res.render('verify', {
            flag: false,
            domain: domain
        })
    }
};