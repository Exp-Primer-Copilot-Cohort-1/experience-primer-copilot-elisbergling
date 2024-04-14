function skillsMember() {
  return {
    restrict: 'E',
    scope: {
      member: '='
    },
    template: '<div>{{member.name}} is skilled in {{member.skill}}</div>'
  };
}