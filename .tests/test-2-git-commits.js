var
  MultiLineError = require('./multi-line-error').MultiLineError,
  fs = require('fs'),
  path = require('path'),
  util = require('util'),
  gitCountCommits = require('git-count-commits')
;

var MIN_COMMITS = 13;

/*
  +++++++++++++++++++++++++++++++++++++++++++++++
  TESTS
  +++++++++++++++++++++++++++++++++++++++++++++++
*/

describe('# git commits', function () {

  it('has enough commits', function (done) {
    var repoPath = path.resolve(process.env.REPO || ('./.git'));

    gitCountCommits(repoPath, function(err, commits) {
      if (commits < MIN_COMMITS || err) {
        throw new MultiLineError('Git Commits', [util.format("Not enough commits to the repository (has %d, expecting %d)", commits, MIN_COMMITS)]);
      }

      done();
    });
  });

});
