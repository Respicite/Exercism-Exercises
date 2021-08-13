class TwoFer
  def self.two_fer(name = 'you')
    "One for #{name}, one for me."
  end

  def self.two_fer_other(name)
    name % 'One for %s, one for you'
  end
end
