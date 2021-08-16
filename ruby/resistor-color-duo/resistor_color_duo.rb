# frozen_string_literal: true

class ResistorColorDuo
  @encoding = {
    'black': 0,
    'brown': 1,
    'red': 2,
    'orange': 3,
    'yellow': 4,
    'green': 5,
    'blue': 6,
    'violet': 7,
    'grey': 8,
    'white': 9
  }.freeze

  def self.value(_params)
    "#{@encoding[_params[0].to_sym]}#{@encoding[_params[1].to_sym]}".to_i
  end
end
